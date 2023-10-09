import '../css/Form.css'
import FormImage from '../assets/background-4876985_1280.jpg'

export function Form() {
    return (
        <>
            <form action="">
                <img src={ FormImage } alt="Mon image" />
                <div className="formulaire">
                    <h2>Inscription</h2>
                    <div className="infos">
                        <div className="name">
                            <label htmlFor="name">Nom : </label>
                            <input type="text" name="name" id="" placeholder="@votre nom"/>
                            <p>ERROR</p>
                        </div>

                        <div className="last-name">
                            <label htmlFor="lastName">Prénom : </label>
                            <input type="text" name="lastName" id="" placeholder="@votre prénom"/>
                            <p>ERROR</p>
                        </div>

                        <div className="gender">
                            <h3>Genre</h3>
                            <div className="gender-choices">
                                <label htmlFor="man">Masculin</label>
                                <input type="radio" name="man" id="" />
                                <label htmlFor="woman">Féminin</label>
                                <input type="radio" name="woman" id="" />
                            </div>
                        </div>

                        <div className="number">
                            <label htmlFor="number">Contact : </label>
                            <input type="number" name="number" id="" placeholder="@votre numéro" />
                            <p>ERROR</p>
                        </div>
                        
                        <div className="email">
                            <label htmlFor="mail">Email : </label>
                            <input type="email" name="mail" id="" placeholder="@adresse mail" />
                            <p>ERROR</p>
                        </div>
                        
                        <div className="email-conf">
                            <label htmlFor="mailConf">Confirmer votre mail : </label>
                            <input type="email" name="mailConf" id="" placeholder="@confimation de l'email" />
                            <p>ERROR</p>
                        </div>
                        
                        <div className="password">
                            <label htmlFor="password">Mot de passe : </label>
                            <input type="password" name="password" id="" placeholder="@password"/>
                            <p>ERROR</p>
                        </div>

                        <div className="password-conf">
                            <label htmlFor="passwordConf">Confirmation du mot de passe : </label>
                            <input type="password" name="passwordConf" id="" placeholder="@confirmation of the password"/>
                            <p>ERROR</p>
                        </div>
                    </div>
                    <h3>E S N</h3>
                </div>
            </form>
        </>
    )
}
