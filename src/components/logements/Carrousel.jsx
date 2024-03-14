function Carrousel ({pictures}) {
console.log(pictures);
    return (
        <div className="Carrousel">
          <img className="Carrousel_arrow-left" src="" alt="" />
          <img className="Carrousel_arrow-right" src="" alt="" />
          <span className="Carrousel_pagination"></span>
        </div>
      );
}

export default Carrousel