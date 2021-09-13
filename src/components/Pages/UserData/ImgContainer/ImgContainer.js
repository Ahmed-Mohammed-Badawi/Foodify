import React, {useEffect, useState} from "react";
import classes from './ImgContainer.module.css';
import Avatar from '../../../../assets/images/Owner.jpg';
import {storage} from '../../../../firebase';
import Spinner from "../../../UI/Spinner/Spinner";

const ImgContainer = (props) => {

    // Local id get by firebase
    const localId = localStorage.getItem('localId');
    // Img src for img
    const [imgSrc, setImgSrc] = useState(null);
    // Spinner visibility State
    const [spinnerUpload, setSpinnerUpload] = useState(false);

    // get the image when it load
    useEffect(() => {
        // get the folder reference which localId
        const imgRef = storage.ref(`${localId}`);
        // get all items inside folder
        imgRef.listAll().then(res => {
            // Loop through items [images]
            res.items.forEach(item => {
                item.getDownloadURL().then(url => {
                    setImgSrc(url)
                })
            })
        })

    }, [localId]);

    // fn() happens when img has choose
    const imgChoose = (img) => {
        // Show the Spinner in upload img btn
        setSpinnerUpload(true)
        // Check if the is src back from firebase from [useEffect]
        if (imgSrc) {
            // if there was link Delete it
            const imgRef = storage.refFromURL(imgSrc);
            imgRef.delete()
        }

        // Start Uploading Task
        const uploadTask = storage.ref(`${localId}/${img.name}`).put(img);

        uploadTask.on(
            //Event
            'state_change',
            snapshot => {
            },
            error => {
                console.log('error:- ', error);
                setSpinnerUpload(false)
            },
            () => {
                storage
                    .ref(`${localId}`)
                    .child(`${img.name}`)
                    .getDownloadURL()
                    .then(url => {
                        // Stop the Spinner and Hide it
                        setSpinnerUpload(false);
                        // fn() shows the img from the local device to save data
                        setImgSrc(url)
                    })
            }
        );
    }

    return (
        <section className={classes.ImgContainer}>
            <div className={classes.Img}>
                <img src={imgSrc || Avatar} alt={'User-img'}/>
            </div>
            <div className={classes.Input}>
                <input
                    onChange={(e) => {
                        imgChoose(e.target.files[0])
                    }}
                    id={'user-img'}
                    type={'File'}
                    accept={'image/*'}/>
                <label htmlFor="user-img">Upload Image {spinnerUpload ? <Spinner mini/> : null} </label>
            </div>
        </section>
    );
}

export default ImgContainer;