import Title from "../../components/Title";

export default function Detail({params}) {
    const [title, id] = params;
    return (
        <div>
            <Title title={title}/>
            <h4>Title: {title}</h4>
        </div>
    )
}

export function getServerSideProps({params:{ params }}) {
    return {
        props: {
            params,
        },
    };
}