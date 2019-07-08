import React, {useEffect, useState} from 'react';

import fetcher from './fetch';

const Dummy = ({data}:{data:any}) => <div>{JSON.stringify(data)}</div>

function Main() {

    const [data, setData] = useState<any>("")

    useEffect(() => {
       const data = fetcher(); 
       setData(data);
    }, []) 

    return <Dummy data={data}/>
}

export default Main;