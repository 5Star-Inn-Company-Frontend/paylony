import { ReportLayout } from "./reportLayout"
import { MapContainer, TileLayer, Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { Text } from "../global/text"
import { useGetTransactionMapQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import MarkerClusterGroup from "./react-leaflet-markercluster";
import toast from "react-hot-toast";
import { ToastError } from "../global/toast";
export const Transaction_Map =()=>{
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl:iconRetinaUrl,
        iconUrl:iconUrl,
        shadowUrl: shadowUrl
    });
    const{
        data:mapData,
        isLoading,
        isError,
        error
    }= useGetTransactionMapQuery();
    console.log(mapData)
    if(isError){
        const{
            status,
            data
        }=error
        ToastError(status,data)
        console.log(error)
    }
    return(
        <ReportLayout title="Transaction Map">
            <div className="mb-4">
                <Text
                    style="mb-2 text-lg text-start font-medium"
                    value="Transaction Count Distribution"
                />
                <Text
                    style="text-sm text-start font-light"
                    value="Successfull Count For the year"
                />
            </div>
            <div className="h-[50vh] w-full">
            {
                isLoading ? (
                <Spinner/>
                ):(
                    mapData?.data &&(
                        <MapContainer 
                            center={[mapData?.data[0]?.state?.latitude, mapData?.data[0]?.state?.longitude]} 
                                zoom={13} 
                                scrollWheelZoom={false}
                                style={{ width: "100%", height: "100%" }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <MarkerClusterGroup>
                            {
                                mapData?.data?.map((mapItem,index)=>{
                                    const{
                                        state,
                                        agent_count
                                    }=mapItem;
                                    return(
                                        <Marker
                                            key={index} 
                                            position={[state?.latitude, state?.longitude]}
                                        
                                        >
                                            <Popup>
                                                {state?.name}
                                            </Popup>
                                        </Marker>
                                    )
                                })
                            }
                        </MarkerClusterGroup>
                    </MapContainer>
                )
            )
        }
        </div>
        </ReportLayout>
        )
}