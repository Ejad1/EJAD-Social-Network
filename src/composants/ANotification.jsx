import fleche from '../assets/caret-right-fill.svg'

export function ANotification() {
    return (
        <div>
            <div className="notif-title">
                <img src={ fleche } alt="" />
                <h3>Titre de la notification</h3>
            </div>
            <p>Contenu : Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit aut consectetur quia illum quod 
                vitae corporis, sapiente animi asperiores possimus? Ad soluta porro nesciunt obcaecati, at similique officia 
                exercitationem.
            </p>
        </div>
    )
}
