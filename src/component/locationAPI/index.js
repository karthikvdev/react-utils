export const handleOnGeolocation = () => {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log("Geo Location", success)
    })
}