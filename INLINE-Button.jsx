// HOW TO STYLE REACT COMPONENTS WITH CSS
//---------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE
function Button() {
 
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        border: "none",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
    }; 

    return(<button style={styles}>Click Me</button>);
}
export default Button 
