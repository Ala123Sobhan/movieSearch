import React,{useState,useEffect} from 'react'
import TvRows from "./TvRows"
import "../App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Modal, Button } from "react-bootstrap"


function TvSearching() {
    const [rows, setRows] = useState([])
    const [inputVal, setInput] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => 
    {
      setShow(false);
    }
    const handleShow = () =>{
       setShow(true);
    }


  const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition();

 useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
 }, [interimTranscript, finalTranscript]);

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
     alert("Voice Recognition not compatible with the browser")
     console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
     //return null;
 }

 const listenContinuously = () => {

   SpeechRecognition.startListening({
     continuous: true,
     language: 'en-GB',
     

   });
    
    
    resetDone()
    handleShow()

 };

 const listeningDone = () =>{

    handleClose()
    SpeechRecognition.stopListening()

    setInput(transcript)
    renderMovieInfo(transcript)
    

 }
  const resetDone =() =>{

    setInput('')
    resetTranscript()

  }

   const  handleChange=(event)=>{
        setInput(event.target.value)
        const searchTerm = event.target.value
        renderMovieInfo(searchTerm)
    }
   

   const renderMovieInfo= async(searchTerm)=>{
    try{

        //for tv
        let url = "https://api.themoviedb.org/3/search/tv?api_key=5958134e04ed9ecbbf6100cd3a582d3d&query="+searchTerm
         
         let response = await fetch(url)
         const data = await response.json()
         const results = data.results;
        //console.log(results)


         var movieRows =[]
         results.forEach((tv) =>
         {
             
             tv.poster_path = "https://image.tmdb.org/t/p/w185"+ tv.poster_path
             //const movieRow = this.getMovieRows(movie)
             
            // const movieRow = <TvRow key={tv.id} tv={tv}/>
             const movieRow = <TvRows key={tv.id} tv={tv}/>
             //console.log(movieRow)
             movieRows.push(movieRow)
             
         })
         setRows(movieRows)
     
     }catch(error){
         console.log(" here: "+error)
     }
    }
    return (
        <div>
            <div className="tvSearch-container">
                <h1 style={{fontFamily:"Montserrat", fontWeight:"bold"}}> TV Search </h1>
                <div>
                <input className="input" value={inputVal}
                style={{
                    fontSize: 24,
                    display: "block",
                    width: "96%",
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingRight: 20,
                    marginRight: 10
                }}
                onChange={handleChange}
                placeholder="Enter a TV show...." />
                  <button type="button" onClick={resetDone}>Reset</button>
                 <button type="button" onClick={listenContinuously}>Listen</button>
                 <button type="button" onClick={listeningDone}>Stop</button>

                {rows}
                </div>

                <div>
                <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
       
      >
     
        <Modal.Title><h6>Listenining...</h6></Modal.Title>
        
        <Modal.Body>
        <h6>{transcript}</h6>
        </Modal.Body>
      </Modal>
                </div>
            </div>
            
        </div>
    )
}

export default TvSearching
