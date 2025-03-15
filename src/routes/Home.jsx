import "./Home.css";

const Home = () => {
    return ( 
        <div className="home">
            <h2>Monte a sua contagem regressiva</h2>
            <form className="countdown-form">
                <label>
                    <span>Título:</span>
                    <input type="text" name="title" placeholder="Informe o título do evento" />
                </label>
                <label>
                    <span>Data:</span>
                    <input type="date" name="date" />
                </label>
                <label>
                    <span>Imagem:</span>
                    <input type="text" name="image" placeholder="Insira a URL da imagem" />
                </label>
                <label>
                    <span>Cor do tema:</span>
                    <input type="color" name="color" />
                </label>
                <input type="submit" value="Criar evento" />
            </form>

        </div>
     );
}
 
export default Home;