import { useContext } from "react";
import {ThemeContext} from './ThemeContext';
function Children(){
    const state = useContext(ThemeContext);
    return(
        <p style={{width:'40%'}} className={state.theme}>
            81% Gen Z cho biết họ có các mục tiêu cụ thể mà họ muốn hoàn thành trong 5 đến 10 năm tới. Tuy nhiên, điều đó khá khó thực hiện khi bị nợ nần chồng chất. Và một nửa trong số những Gen Z được khảo sát cho biết “có nhiều tiền hơn sẽ cải thiện cuộc sống của họ hơn”.
        </p>
    )
}

export default Children;