import Chance from "chance";

const userData = Chance();

export const fakeUserData = () => {
    return userData.name({ middle: true })
}