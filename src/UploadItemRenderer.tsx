import React from "react";

import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';

const UploadItem=({fileName,chunk,chunkCount,uploadState,uploadStatus}:any)=><ProgressIndicator 
    label={<div>
        {fileName+(chunk||chunk==0?"#"+(chunk+1)+"/"+chunkCount:"")}
        <div style={{fontSize:"smaller",color:"red"}}>{uploadState}</div>
        </div>
    } 
    percentComplete={chunk || chunk==0?chunk/chunkCount:(uploadStatus ||uploadStatus==0?uploadStatus: undefined)} 
/>;

export default UploadItem;