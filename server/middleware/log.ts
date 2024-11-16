export default defineEventHandler((event) => {
    console.log('Request:' + getRequestURL(event));
    //console.log('Request:' + getRequestURL(event), event);
});