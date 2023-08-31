import { Outlet } from 'react-router-dom';

export const LayoutComponent = () => {
    return (
        <>
            <div className="container">
                <Outlet /> 
            </div>
        </>
    )
};