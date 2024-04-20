import * as React from 'react';
import { PrimaryButton,DefaultButton } from 'office-ui-fabric-react';
import convertDataToExcel from 'data-to-xlsx';

export interface IPCFButtonProps {
  buttonText: any;
  jsonData: any;
  fileName:any;
  backgroundColor?: any;
  color?: any;
  fontSize?: any;
  fontWeight?: any;
  fontFamily?: any;
  borderColor?: any;
  borderRadius?: any;
  width?:any;
  height?:any;
  backgroundColorHover?:any;
  sheetName?:any;
}

export const ButtonAnchor: React.FunctionComponent<IPCFButtonProps> = props => {
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {   
     event.preventDefault();
     try {
      convertDataToExcel({
        data:JSON.parse(props.jsonData),
        fileName:props.fileName,
        sheetName:props.sheetName
    })

    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };
  return (
    <PrimaryButton onClick={onButtonClick}   styles={{
      root: {
        backgroundColor: props.backgroundColor,
        color: props.color,
        width:props.width,
        height:props.height,
        fontSize:props.fontSize,        
        borderColor:props.borderColor,
        borderRadius:props.borderRadius           
      }     ,
      rootHovered: {
        backgroundColor: props.backgroundColorHover,
        borderColor:"none"          
      },   
    }}>
      {props.buttonText}
    </PrimaryButton>
  );
};