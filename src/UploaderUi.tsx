import React from "react";
import { Modal, IModalStyles } from 'office-ui-fabric-react/lib/Modal';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { AnimationStyles } from 'office-ui-fabric-react/lib/Styling';
import {IUploaderUiProps} from '@react-drag-drop-upload/core/UploadContainer';

const dialogStyle:Partial<IModalStyles>={
    main:{
        position: "absolute",
        bottom: 0,
        right: 20,
        minHeight:100,
        ...AnimationStyles.fadeIn500
    }
};

const headerStyle={
    background: '#0078d4',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 600,
    padding: '0 12px'
}

const UploaderUi=({inProgress,queue,completed,waitingCountText,title}:IUploaderUiProps)=><Modal 
    isOpen={inProgress.length ||queue.length ||completed.length?true:false}
    styles={dialogStyle}
    onDismiss={/**/undefined}
    isModeless={true}
>
    <div style={headerStyle}>
        {title||"Upload Queue ..."}
    </div>
    <div style={{ width:400, padding:8 }}>
        {completed.slice(-5).map((i,ndx) => <div style={{display:"flex"}} key={ndx}>
            <Icon iconName={i.resultType=="error"?"Dislike":"Like"} style={{
                fontSize:24,
                color:i.resultType=="error"?"red":"green",
                marginTop: 6,
                marginRight: 8,
            }}/>
            <div>
                <span>{i.name}</span>
                <div style={{fontSize:"smaller",color:i.resultType=="error"?"red":"green"}}>{i.result}</div>
            </div>
        </div>)}
        {inProgress}
        {waitingCountText||"Waiting Count"}: {queue.length}
    </div>
</Modal>;


export default UploaderUi;