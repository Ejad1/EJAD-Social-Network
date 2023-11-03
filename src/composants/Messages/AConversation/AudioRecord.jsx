// import { Component } from 'react';
// import MicRecorder from 'mic-recorder-to-mp3';

// const Mp3Recorder = new MicRecorder({ bitRate: 128 });

// class AudioRecorder extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isRecording: false,
//       blobURL: '',
//     };
//   }

//   startRecording = () => {
//     Mp3Recorder.start().then(() => {
//       this.setState({ isRecording: true });
//     }).catch((e) => console.error(e));
//   };

//   stopRecording = () => {
//     Mp3Recorder
//       .stop()
//       .getMp3()
//       .then(([buffer, blob]) => {
//         const blobURL = URL.createObjectURL(blob);
//         this.setState({ isRecording: false, blobURL });
//       }).catch((e) => console.log(e));
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.startRecording} disabled={this.state.isRecording}>
//           Démarrer enregistrement
//         </button>
//         <button onClick={this.stopRecording} disabled={!this.state.isRecording}>
//           Arrêter enregistrement
//         </button>
//         {this.state.blobURL && (
//           <audio controls>
//             <source src={this.state.blobURL} />
//           </audio>
//         )}
//       </div>
//     );
//   }
// }

// export default AudioRecorder;

