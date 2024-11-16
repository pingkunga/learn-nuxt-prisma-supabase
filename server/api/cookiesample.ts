export default defineEventHandler((event) => {
    setCookie(event, 'exampleToken', 'pk_test_51J', {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,  //Server Side Read
        secure: process.env.NODE_ENV === 'production' //HTTPS
    });

    const cookies = parseCookies(event);
    const exampleToken = cookies.exampleToken || 'no_token';
    console.log(cookies);
    console.log(exampleToken);

    return {
        message: 'Cookie Sample',cookies 
    }
});