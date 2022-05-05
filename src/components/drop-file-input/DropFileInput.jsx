import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import {IamgeConfig} from '../config/ImageConfig';
import uploadImg from '../../photo/cloud.png';
import '../drop-file-input/drop-file-input.css';


function DropFileInput(props) {
    const wrapperRef = useRef(null);
    const [fileList , setFilelist] = useState([]); 

    const onDragEnter = () => wrapperRef.current.classList.add
    ('dragover');
     
    const onDragLeave = () => wrapperRef.current.classList.remove
    ('dragover');

    const onDrop = () => wrapperRef.current.classList.remove
    ('dragover');

    const onFileDrop =(e) => {
        const newFile = e.target.files[0];
        console.log(newFile)
        if(newFile){
            const updatedList = [...fileList, newFile];
            setFilelist(updatedList)
            props.onFileChange(updatedList);
        }
    }

    const fileRemove =(file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFilelist(updatedList); 
        props.onFileChange(updatedList);
    }
    return (
        <>
            <div 
                ref={wrapperRef}
                className = "drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave= {onDragLeave}
                onDrop={onDrop}
                onClick={onDragEnter}
             
             >
                <div className = "drop-file-input_label">
                    <img src={uploadImg} alt="" />
                    <p>Drag & Drip your File here</p>
                </div>
                <input type = "file" value="" onChange={onFileDrop}/> 
            </div>
            {
                 fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className = "drop-file-preview_title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item,index)=>(
                                <div key = {index} className = "drop-file-preview_item">
                                <img src = {IamgeConfig[item.type.split('/')[1]] || IamgeConfig['default']} alt=""/>
                                <div className = "drop-file-preview_item_info">
                                    <p>{item.name}</p>
                                    <p>{item.size}B</p>
                                </div>
                                <span className="drop-file-preview__item__del"onClick={() => fileRemove(item)}>x</span>
                            </div>
                        ))
                    }
                </div>
            ) : null
        }
    </>

        
    );
}

DropFileInput.propTypes = {
    onFileChange:PropTypes.func

}

export default DropFileInput;

