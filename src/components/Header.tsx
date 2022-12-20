interface IProps {
    name : string;
    store : string;
    num : number;
}

export function Header (props: IProps) {
    const {name} = props;
    const {store} = props;
    const {num} = props;

    return (
        <div>
           <span>{name}</span>  
           <span>{store}</span> 
           <span>{num}</span>  


        </div>
    )
}