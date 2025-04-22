const decodeJWT = (token) => {
    const base64Url = token.split('.')[1]; // Get the payload part (second part)
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Ensure it's in valid Base64 format
    const jsonPayload = decodeURIComponent(
        atob(base64) // Decode the Base64 string to a normal string
            .split('')
            .map((char) => '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );
    return JSON.parse(jsonPayload); // Parse the JSON string into an object
};

export default decodeJWT