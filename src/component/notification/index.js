import Logo from "./drinkwater.webp"

export const handleOnNotification = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("Drink water", {
        body: "Mr Karthik Balaji",
        icon: Logo
      })
    }
  })
}