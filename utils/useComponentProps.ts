/* eslint-disable max-len */
import React from 'react';
import { English, Language } from '../localization/languages';
import { DeviceEventEmitter } from 'react-native';


interface WelcomeImageURLs {
  url1: string,
  url2: string,
  url3: string,
}

interface Context {
  urls: WelcomeImageURLs
}

interface ComponentProps {
  context: Context,
  language: Language
}

export const defaultComponentProps: ComponentProps = {
  context: {
    urls: {
      url1: 'https://media.istockphoto.com/id/1299265795/pl/zdj%C4%99cie/rodzinne-wakacje-szcz%C4%99%C5%9Bliwa-rodzina-dzia%C5%82a-na-pla%C5%BCy-w-zachodzie-s%C5%82o%C5%84ca-widok-na-szcz%C4%99%C5%9Bliw%C4%85.jpg?s=2048x2048&w=is&k=20&c=wfbsYIjiFlKoF7RrEVAQxPRoPO65xtzXYbepgOxH3pI=',
      url2: 'https://media.istockphoto.com/id/1369283591/pl/zdj%C4%99cie/kobieta-w-okularach-przeciws%C5%82onecznych-stoj%C4%85ca-obok-samochodu-na-pla%C5%BCy-podczas-gdy-jej.jpg?s=2048x2048&w=is&k=20&c=r_YOzjASJV39Wz_DJin2QGn25rzSAwSDjNrgo0xO-qA=',
      url3: 'https://media.istockphoto.com/id/1018942362/pl/zdj%C4%99cie/pi%C4%99ciu-m%C5%82odych-ludzi-bawi%C4%85cych-si%C4%99-w-kabriolet-samoch%C3%B3d-na-pla%C5%BCy-o-zachodzie-s%C5%82o%C5%84ca.jpg?s=2048x2048&w=is&k=20&c=hrR0JVGeTUa7e-VSNAIht9-N6jz4j7sw2qXVErEHV70=',
    },
  },
  language: English,
};

const DataContext = React.createContext<ComponentProps>(defaultComponentProps);

export default function useComponentProps(): ComponentProps {
  React.useEffect(() => {
    DeviceEventEmitter.addListener('broadcaster-data-received', (data) => {
      console.log('Your data is here: ', data);
    });
  }, []);

  return React.useContext(DataContext);
}
