import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonAnchor, IPCFButtonProps } from './FluentUIButton';

export class exportToExcel implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private theContainer: HTMLDivElement;
	private props: IPCFButtonProps = {		
		buttonText: "",
		jsonData: "",
        fileName:"",
        backgroundColor: "",
        color: "",
        fontSize: "",       
        borderColor: "",
        borderRadius: "",
        width:"",
        height:"",
        backgroundColorHover:"",
        sheetName:""
	}
    constructor()
    {

    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {    
        this.theContainer = container;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void
    {    
        this.props.buttonText = context.parameters.buttonText.raw!;
		this.props.jsonData = context.parameters.jsonData.raw!;
        this.props.fileName = context.parameters.fileName.raw!;
		this.props.fontSize = context.parameters.fontSize.raw!;        
        this.props.backgroundColor = context.parameters.backgroundColor.raw!;
        this.props.backgroundColorHover = context.parameters.backgroundColorHover.raw!;
        this.props.borderColor = context.parameters.borderColor.raw!;
		this.props.borderRadius = context.parameters.borderRadius.raw!;
        this.props.color = context.parameters.color.raw!;
        this.props.width = context.parameters.width.raw!;
        this.props.height = context.parameters.height.raw!;
        this.props.sheetName = context.parameters.sheetName.raw!;
		ReactDOM.render(
			React.createElement(
				ButtonAnchor,
				this.props
			),
			this.theContainer
		);
    }

    public getOutputs(): IOutputs
    {
        return {};
    }
    public destroy(): void
    {        
        ReactDOM.unmountComponentAtNode(this.theContainer);
    }
}
