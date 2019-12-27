import Channels from "../components/channels/channels";
import messages from "../components/messages/messages";
import { NavigationAction } from "react-navigation";
import { EnumValues } from 'enum-values'

enum Screens {
    Home,
    ChannelsPage
}
const getPage = (screen: Screens):()=>JSX.Element => {
    switch(screen){
        case Screens.Home: return messages
        case Screens.ChannelsPage: return Channels
    }
}

const switchTo = (navigation: (elem:any, data: any)=>void, params:Screens, data: Object) => {
    navigation(getPage(params), data)
}

const getRoutes = () => {
    let screens = EnumValues.getNames(Screens).map((screen) => ({
        [screen]:{screen: getPage(Screens[screen as keyof typeof Screens])}
    }))
    return Object.assign({},...screens)
}

export { Screens, switchTo, getRoutes };
