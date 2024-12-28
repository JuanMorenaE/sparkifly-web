import './sparkifly_loader.css'
import Logo from '../../assets/sparkifly.png'
import Spark from '../../assets/spark.png'

export const SparkiflyLoader = ({ loading }) => {

    if (!loading) {
        setTimeout(() => {
            document.querySelector(".sparkifly-loader").style.display = "none";
        }, 500);
    }

    return (
        <>
            {
                loading ? (
                    <div className='absolute top-0 left-0 z-50 w-full min-h-screen bg-white grid items-center p-4 sparkifly-loader'>
                        <div className='flex justify-center items-center relative max-w-72 mx-auto'>
                            <img src={Spark} className='max-w-5 w-full absolute bottom-[-0.5em] left-0 spark-animation-left' alt="" />
                            <img src={Logo} className='max-w-52 w-full popUp-animation' alt="" />
                            <img src={Spark} className='max-w-5 w-full absolute top-0 right-0 spark-animation-right' alt="" />
                        </div>
                    </div>
                ) : (
                    <div className='absolute top-0 left-0 z-50 w-full min-h-screen bg-white grid items-center p-4 sparkifly-loader fadeOut'>
                        <div className='flex justify-center items-center relative max-w-72 mx-auto'>
                            <img src={Spark} className='max-w-5 w-full absolute bottom-[-0.5em] left-0 spark-animation-left' alt="" />
                            <img src={Logo} className='max-w-52 w-full popUp-animation-reverse' alt="" />
                            <img src={Spark} className='max-w-5 w-full absolute top-0 right-0 spark-animation-right' alt="" />
                        </div>
                    </div>
                )
            }
        </>
    )
}
