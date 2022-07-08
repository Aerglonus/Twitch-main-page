const colors = [
 "#9147ff",
 "#FFD44D",
 "#FFc7c7",
 "#bed7f3",
 "#Fcc4cb",
 "#bdcfff",
 "#ffc65c",
 "#fab3ff",
 "#f9aaff",
 "#fc9cd9",
 "#dca8e0",
 "#c8a5ff",
 "#69bdf5",
 "#89bbd4",
 "#00c7ac",
 "#dc8888",
 "#b18ede",
];

const ColorComponent = ({ colors, img }) => {
 return (
  <div>
   {colors.map((color) => (
    <div className="stream " style={{ background: color }} key={color}>
     <div className="stream__thumbnail h-full">
      <img src={img} alt="" height="187px" width="320px" />
     </div>
    </div>
   ))}
  </div>
 );
};

const ParentComponent = () => {
 return (
  <div>
   <ColorComponent colors={colors} />
  </div>
 )
}

export { ParentComponent, ColorComponent };