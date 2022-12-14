import React from "react";
import '../../css/TranslateComponent.css';
import a from '../../assets/individial_signs/a.png';
import b from '../../assets/individial_signs/b.png';
import c from '../../assets/individial_signs/c.png';
import d from '../../assets/individial_signs/d.png';
import e from '../../assets/individial_signs/e.png';
import f from '../../assets/individial_signs/f.png';
import g from '../../assets/individial_signs/g.png';
import h from '../../assets/individial_signs/h.png';
import i from '../../assets/individial_signs/i.png';
import j from '../../assets/individial_signs/j.png';
import k from '../../assets/individial_signs/k.png';
import l from '../../assets/individial_signs/l.png';
import m from '../../assets/individial_signs/m.png';
import n from '../../assets/individial_signs/n.png';
import o from '../../assets/individial_signs/o.png';
import p from '../../assets/individial_signs/p.png';
import q from '../../assets/individial_signs/q.png';
import r from '../../assets/individial_signs/r.png';
import s from '../../assets/individial_signs/s.png';
import t from '../../assets/individial_signs/t.png';
import u from '../../assets/individial_signs/u.png';
import v from '../../assets/individial_signs/v.png';
import w from '../../assets/individial_signs/w.png';
import x from '../../assets/individial_signs/x.png';
import y from '../../assets/individial_signs/y.png';
import z from '../../assets/individial_signs/z.png';
import { useEffect } from "react";
import { useUser } from '../../context/UserContext';
import { translationAdd } from "../../api/translation";



function Translate({wordToTranslate}){
    const { user, setUser} = useUser()


    useEffect(() => {
        
        showTranslation()
    },[wordToTranslate]
    )

    //Function to display png's of every letter in the translation input.
    async function showTranslation() {
        console.log(user)
        var imageDiv = document.getElementById('translateBox');
        imageDiv.innerHTML = "";
        for(let i = 0; i < wordToTranslate.length; i++){
            let char = "";
                let myChar = "";
                myChar = wordToTranslate.charAt(i).toLowerCase();
                var image = document.createElement("img");
                image.className = "signImage";
                image.alt = char;
                image.src = getImgPath(myChar);
                imageDiv.appendChild(image);
        }
        //Check if the input is not empty before adding it to the api and updating current user.
        if(wordToTranslate != ""){
            const [error, result] = await translationAdd(user, wordToTranslate)
            setUser({...user, translations: [...user.translations, wordToTranslate] })
        }    }
    
    //Returning the image path for a given letter.
    function getImgPath(char){
        let path = "";
        switch(char){
            case 'a':
                path = a;
                break;
            case 'b':
                path = b;
                break;
            case 'c':
                path = c;
                break;
            case 'd':
                path = d;
                break;
            case 'e':
                path = e;
                break;
            case 'f':
                path = f;
                break;
            case 'g':
                path = g;
                break;
            case 'h':
                path = h;
                break;
            case 'i':
                path = i;
                break;
            case 'j':
                path = j;
                break;
            case 'k':
                path = k;
                break;
            case 'l':
                path = l;
                break;
            case 'm':
                path = m;
                break;
            case 'n':
                path = n;
                break;
            case 'o':
                path = o;
                break;
            case 'p':
                path = p;
                break;
            case 'q':
                path = q;
                break;
            case 'r':
                path = r;
                break;
            case 's':
                path = s;
                break;
            case 't':
                path = t;
                break;
            case 'u':
                path = u;
                break;
            case 'v':
                path = v;
                break;
            case 'w':
                path = w;
                break;
            case 'x':
                path = x;
                break;
            case 'y':
                path = y;
                break;
            case 'z':
                path = z;
                break;
            }
            return path;
    }

    //Html to ser up a card that displays a translation
    return(
        <div className="card">
            <div className="top">
            <p className="headText">Translate: </p>
            <p className="textToTranslate">{wordToTranslate}</p>
            </div>
            <p className="underline"></p>
            <div id="translateBox">

            </div>
        </div>
    )
}

export default Translate;