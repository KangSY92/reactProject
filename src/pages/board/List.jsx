import ListComponent from "../../components/board/ListComponent"
import FooterComponent from "../../components/common/footerComponent"
import HeaderComponect from "../../components/common/headerComponect"
import NavComponent from "../../components/common/navComponent"

export default function List() {
    return (
        <>
            <HeaderComponect></HeaderComponect>
            <NavComponent></NavComponent>
            <ListComponent></ListComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}