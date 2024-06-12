
export const NextArrow = (props,)=> {


    return(
        <>   
     <div
  className={props.className}
  style={{
    ...props.style,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fully transparent background
    width: "50px", // Adjust width as needed
    height: "50px", // Adjust height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "default",
    borderRadius: 64, // Set border radius to 0
    fontSize: "28px", // Adjust font size as needed
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.2s, background-color 0.3s, box-shadow 0.3s",
    transformOrigin: "center",
  }}
  onClick={props.onClick}
>

</div>

        </>
    );

};



export const PrevArrow = (props)=> {
    return(
        <>
         <div
  className={props.className}
  style={{
    ...props.style,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fully transparent background
    width: "50px", // Adjust width as needed
    height: "50px", // Adjust height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "default",
    borderRadius: 64, // Set border radius to 0
    fontSize: "28px", // Adjust font size as needed
    color: "Gray",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.2s, background-color 0.3s, box-shadow 0.3s",
    transformOrigin: "center",
  }}
  onClick={props.onClick}
>

</div>
        </>
    );

};

























export const NextArrow1 = (props,)=> {


  return(
      <>   
   <div
className={props.className}
style={{
  ...props.style,
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Fully transparent background
  width: "80px", // Adjust width as needed
  height: "50px", // Adjust height as needed
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "",
  borderRadius: 4, // Set border radius to 0
  fontSize: "28px", // Adjust font size as needed
  color: "white",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  transition: "transform 0.2s, background-color 0.3s, box-shadow 0.3s",
  transformOrigin: "center",
}}
onClick={props.onClick}
>

</div>

      </>
  );

};



export const PrevArrow2 = (props)=> {
  return(
      <>
       <div
className={props.className}
style={{
  ...props.style,
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Fully transparent background
  width: "60px", // Adjust width as needed
  height: "40px", // Adjust height as needed
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "",
  borderRadius: 4, // Set border radius to 0
  fontSize: "28px", // Adjust font size as needed
  color: "Gray",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  transition: "transform 0.2s, background-color 0.3s, box-shadow 0.3s",
  transformOrigin: "center",
}}
onClick={props.onClick}
>

</div>
      </>
  );

};
