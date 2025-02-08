// import ControlPanel from './controls';
import ControlPanel from './controls';
import NameBadge from './name-badge';

const Application = () => (
  <main className="application">
    <NameBadge name='Pritam'/>
    <ControlPanel name='Test' onChange={()=>console.log("ControlPanel")}/>
  </main>
);

export default Application;
