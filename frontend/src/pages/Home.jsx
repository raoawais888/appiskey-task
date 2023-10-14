
import List from "../components/List"
import AddList from "../components/AddList"
import  { Toaster } from 'react-hot-toast';
const Home = () => {

    return(

        <>
            <div className="conatiner m-5">
        <div className="row">
            
            {/* add to task component  */}
             <AddList/>

             {/*List of all task component  */}
               <List />

               {/* notify taoster component  */}
            <Toaster />
        </div>
    </div>

        </>
    )

}

export default Home