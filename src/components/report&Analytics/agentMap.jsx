import { ReportLayout } from "./reportLayout"
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Text } from "../global/text"
export const Agent_Map =()=>{
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
            <MapContainer 
                center={[6.684785721868957, 3.370807995598992]} 
                    zoom={13} 
                    scrollWheelZoom={false}
                    style={{ width: "100%", height: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[6.684785721868957, 3.370807995598992]}>
                    <Popup>
                    6, ORE-OFE STREET, AKINBO PHASE 2, AKUTE, OGUN STATE, NIGERIA.
                    </Popup>
                </Marker>
                </MapContainer>
        </div>
        </ReportLayout>
        )
}