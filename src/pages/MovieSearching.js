import React,{useState,useEffect} from 'react'
import MovieRows from "./MovieRows"
import "../App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ReactDOM from "react-dom"
import { Modal, Button } from "react-bootstrap"



function MovieSearching() {
    const [rows, setRows] = useState([])
    const [inputVal, setInput] = useState('');

    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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
   //return null;
 }

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    // alert("Voice Recognition not compatible with the browser")
   console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
 }
 const listenContinuously = () => {

   SpeechRecognition.startListening({
     continuous: true,
     language: 'en-GB',
     language: 'hindi',

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

   const onClick= ()=> {
    this.dialog.showAlert({transcript})
  }
   const  handleChange=(event)=>{
        setInput(event.target.value)
        const searchTerm = event.target.value
        renderMovieInfo(searchTerm)
    }
   

   const renderMovieInfo= async(searchTerm)=>{
        try{
        //for movies & tv
        let url = "https://api.themoviedb.org/3/search/multi?api_key=5958134e04ed9ecbbf6100cd3a582d3d&query="+searchTerm

        let response = await fetch(url)
            const data = await response.json()
            const results = data.results;
           // console.log(results)

        var movieRows =[]
            results.forEach((movie) =>
            {
                movie.poster_path = "https://image.tmdb.org/t/p/w185"+ movie.poster_path
                //const movieRow = this.getMovieRows(movie)
               // const movieRow = <MovieRow key={movie.id} movie={movie}/>
               const movieRow = <MovieRows key={movie.id} movie={movie}/>
               // console.log(movieRow)
                movieRows.push(movieRow)
                
            })
            setRows(movieRows)
           
        }catch(error){
            console.log(error)
        }
    }
    return (
             <div className="movieSearch-container">
                    <h1 style={{fontFamily:"Montserrat", fontWeight:"bold"}}>Movie Search</h1>
                    <input className ="input" value={inputVal}
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
                placeholder="Enter a movie...." />
                 <button type="button" onClick={resetDone}>Reset</button>
                 <button type="button" onClick={listenContinuously}>Listen</button>
                 <button type="button" onClick={listeningDone}>Stop</button>
                 <div> {rows}</div>
                 <div className="modal-container">
                 <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Title>Listenining...</Modal.Title>
        
        <Modal.Body>
        <span>{transcript}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={listeningDone}>
            Close
          </Button>
           
        </Modal.Footer>
      </Modal>
              </div>
        </div>
    )
}

export default MovieSearching
