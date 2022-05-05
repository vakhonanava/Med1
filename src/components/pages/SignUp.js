import React from 'react'
import '../../components/signup.css'

import DropFileInput from '../drop-file-input/DropFileInput';

function SignUp() {

    const onFileChange = (files) => {
        console.log(files)
    }
    const formHandler = (e) => {
        e.preventDefault();
        const file=e.target[0].files[0];
        console.log(file);
    }
    return (
        <div className="box">
            <h2 className="header">
                Upload your Resume and Motivation letter
            </h2>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <DropFileInput FileChange={(files)=> onFileChange(files)}/>
                <form onSubmit={formHandler}>
                    <input type="file" className="input"/>
                    <button type="sumbit">Upload</button>
                </form>
            </div>
            
        </div>

    );
}

export default SignUp




// function SignUp() {
//     const onFileChange = (files) => {
//         console.log(files);
//     }

//     return (
//         <div className="box">
//             <h2 className="header">Upload
//             </h2>
//             <DropFileInput>
//                 onFileChange={(files) => onFileChange(files)}
//             </DropFileInput>
            
//         </div>
//     )
// }

// export default SignUp
