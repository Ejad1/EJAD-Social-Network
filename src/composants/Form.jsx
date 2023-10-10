import { useRef, useState } from 'react';
import '../css/Form.css'

export function Form() {
    // Errors messages
    const [nameError, setNameError] = useState("");

    // Inputs ref
    const firstname = useRef(null);
    const lastname = useRef(null);
    const number = useRef(null);
    const email = useRef(null);
    const emailConf = useRef(null);
    const password = useRef(null);
    const passwordConf = useRef(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if ( firstname.current.value === "") {
            setNameError("Please enter your first name");
        }
    }


    return (
        <>
            <form  onSubmit={ handleSubmitForm }>
                <div className="esn">
                    <h3>E</h3>
                    <h3>S</h3>
                    <h3>N</h3>
                </div>
                <div className="formulaire">
                    <h1>Inscription</h1>
                    <div className="infos">
                        <div className="body-infos">
                            <div className="first-last-name">
                                <div className="name">
                                    <label htmlFor="name">Nom : </label>
                                    <input type="text" name="name" placeholder="@votre nom" ref={ firstname }/>
                                    <p>{ nameError }</p>
                                </div>

                                <div className="last-name">
                                    <label htmlFor="lastName">Prénom : </label>
                                    <input type="text" name="lastName" placeholder="@votre prénom" ref={ lastname }/>
                                    <p>ERROR</p>
                                </div>
                            </div>

                            <div className="gender-contact">
                                <div className="number">
                                    <label htmlFor="number">Contact : </label>
                                    <input type="number" name="number" placeholder="@votre numéro" ref={ number } />
                                    <p>ERROR</p>
                                </div>
                                
                                <div className="gender">
                                    <h3>Genre</h3>
                                    <section className="gender-choices">
                                        <label htmlFor="man" id='man-label'>Masculin</label>
                                        <input type="radio" name="man" />
                                        <label htmlFor="woman" id='woman-label'>Féminin</label>
                                        <input type="radio" name="woman" />
                                    </section>
                                </div>
                            </div>
                        </div>
                        
                        <div className="account-infos">
                            <div className="mail-infos">
                                <div className="email">
                                    <label htmlFor="mail">Email : </label>
                                    <input type="email" name="mail" placeholder="@adresse mail" ref={ email } />
                                    <p>ERROR</p>
                                </div>
                                
                                <div className="email-conf">
                                    <label htmlFor="mailConf">Confirmer votre mail : </label>
                                    <input type="email" name="mailConf" placeholder="@confimation de l'email" ref={ emailConf } />
                                    <p>ERROR</p>
                                </div>
                            </div>
                            
                            <div className="password-infos">
                                <div className="password">
                                    <label htmlFor="password">Mot de passe : </label>
                                    <input type="password" name="password" placeholder="@password" ref={ password }/>
                                    <p>ERROR</p>
                                </div>

                                <div className="password-conf">
                                    <label htmlFor="passwordConf">Confirmation du mot de passe : </label>
                                    <input type="password" name="passwordConf" placeholder="@confirmation of the password" ref={ passwordConf }/>
                                    <p>ERROR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </>
    )
}
