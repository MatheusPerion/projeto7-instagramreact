import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";



return (
    <div className="sidebar">
      <Usuario
        nomeDoUsuario={nomeDoUsuario}
        foto={foto}
        trocarFoto={trocarFoto}
        trocaNomeDoUsuario={trocaNomeDoUsuario}
      />
      <Sugestoes />
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );


  export default function SideBar() {
    const fotoInicial = "assets/img/profiles/catanacomics.svg";
    const [nomeDoUsuario, setNomeDoUsuario] = useState("catanacomics");
    const [foto, setFoto] = useState(fotoInicial);
    const trocaNomeDoUsuario = () => {
      const novoNome = prompt("Qual é o seu nome?");
      if (novoNome.length !== 0) {
        setNomeDoUsuario(novoNome);
      }
    }
}
