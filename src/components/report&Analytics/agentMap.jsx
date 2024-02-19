import { ReportLayout } from "./reportLayout"
import { MapContainer, TileLayer, Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { Text } from "../global/text"
import { useGetAgentMapQuery } from "../../store/apiSlice";
import Spinner from "../global/spinner";
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import MarkerClusterGroup from "./react-leaflet-markercluster";
import toast from "react-hot-toast";
import { ToastError } from "../global/toast";
import { useEffect, useState } from "react";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
export const Agent_Map =()=>{
    const [mapCoordinates, setMapCoordinates] = useState([]);
    const heatmapOptions = {
        radius: 20,
        blur: 20,
        maxZoom: 18,
        minOpacity: 0.5,
        maxOpacity: 1
    };
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
    }= useGetAgentMapQuery();

    useEffect(() => {
                let newData=[];
                if(mapData?.data && mapData?.data?.length !==0){
                    mapData?.data.forEach((coordinate)=>{
                        const{
                            state,
                            agent_count
                        }=coordinate;
                        newData.push([
                            parseFloat(state?.latitude),
                            parseFloat(state?.longitude),
                            agent_count
                        ])
                    })
                }
                setMapCoordinates(newData);
            }, [mapData]);
            console.log(mapCoordinates);
    if(isError){
        const{
            status,
            data
        }=error
        ToastError(status,data)
        console.log(error)
    }
    return(
        <ReportLayout title="Agent Map">
            <div className="mb-4">
                <Text
                    style="mb-2 text-lg text-start font-medium"
                    value="Agent Count Distribution"
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
                    (mapData?.data && mapData?.data?.length !==0) &&(
                        <MapContainer 
                            center={[mapData?.data[0]?.state?.latitude, mapData?.data[0]?.state?.longitude]} 
                                zoom={13} 
                                scrollWheelZoom={false}
                                style={{ width: "100%", height: "100%" }}
                        >
                            <HeatmapLayer
                                fitBoundsOnLoad
                                fitBoundsOnUpdate
                                points={mapCoordinates}
                                longitudeExtractor={(point) => point[1]}
                                latitudeExtractor={(point) => point[0]}
                                key={Math.random() + Math.random()}
                                intensityExtractor={(point) => parseFloat(point[2])}
                                {...heatmapOptions}
                            />
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <MarkerClusterGroup>
                            {
                                mapData?.data?.map((mapItem,index)=>{
                                    const{
                                        state
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