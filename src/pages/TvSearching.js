import React,{useState,useEffect} from 'react'
import TvRows from "./TvRows"
import "../App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Modal, Button } from "react-bootstrap"
import { FaMicrophone } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";


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
      <div className="tvSearch-container">
                    <h1 style={{fontFamily:"Montserrat", fontWeight:"bold"}}> TV Search </h1>
                <div className="searchBar-container">
                <input className="input" value={inputVal}
                style={{
                    fontSize: 24,
                    display: "block",
                    width: "75%",
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingRight: 20,
                    marginRight: 10
                }}
                onChange={handleChange}
                placeholder="Enter a TV show...." />
                <button className="voicebutton" type="button" onClick={resetDone}> <FaSyncAlt style={{color:"white"}}/> </button>
                <button className="voicebutton" type="button" onClick={listenContinuously}> <FaMicrophone style={{color:"white"}} /></button>
                <button className="voicebutton" type="button" onClick={listeningDone}> <FaStopCircle style={{color:"white"}} /> </button>
                </div>
                <div> {rows}</div>
                <Modal className="modal-container" aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        >
        <div>
        <Modal.Title className="modalbody-textHolder">Listening...</Modal.Title>
        <Modal.Body className="modal-body">
        <span className="text-transcript">{transcript}</span>
        </Modal.Body>
        </div>
        <Modal.Footer>
            <Button style={{float:"right"}} variant="secondary" onClick={listeningDone}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
        </div>
    )
}

export default TvSearching
