import Tabs from "./tabs";

export default function TabContent(){

    const tabs=[
        {
            label: 'Tab 1',
            content: <div>this is tab1</div>
        },
        {
            label:'Tab 2',
            content: <h1 style={{color:'red'}}>this is tab2 heading</h1>
        },
        {
            label:'Tab 3',
            content: <p>this is the content for the tab three, where on earth are we now</p>
        }
    ]


    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}