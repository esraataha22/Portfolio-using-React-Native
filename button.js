import {Button , View } from 'react-native';
import FileSaver from 'file-saver';
export default function ButtonComponent() {
    const saveFile = () => {
         FileSaver.saveAs(
         process.env.REACT_APP_CLIENT_URL + "./assests/cv.pdf",
    )
         }
    return (
        <>
            <View >
                <Button
                onPress={saveFile}
                title="Download Resume"
                color="gold"
            />
            </View>
        </>
    )
}
