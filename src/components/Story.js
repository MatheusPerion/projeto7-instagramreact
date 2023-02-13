export default function Story(props) {

    return (

      <div className="story">
        <div className="imagem">
          <img src={props.propImg} />
        </div>
        <div className="usuario">{props.propName}</div>
      </div>
    );

    }

    