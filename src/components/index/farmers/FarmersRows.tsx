import React, {FC, useState} from 'react';
import './farmersPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import RequiredNutrientsHeader from "./RequiredNutrients/RequiredNutrientsHeader";
import {useDispatch} from "react-redux";
import NutrientList from "./NutrientsList/NutrientList";
import RequiredNutrientList from "./RequiredNutrients/RequiredNutrientList";
import NutrientsListHeader from "./NutrientsList/NutrientsListHeader";
import AvailableFertilizersList from "./FertilizersList/AvailableFertilizersList";
import FertilizersListHeader from "./FertilizersList/FertilizersListHeader";



const FarmersRows:FC = ()=>{
    const dispatch = useDispatch();


    return(

            <div className="row">
                <div className="col-12 col-lg-5 col-xl-5 col-xxl-5">
                    <h3 >Result</h3>
                    <div id="listRes" className="listRes">

                    </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-3 col-xxl-3">
                    <h3 >Required nutrients</h3>
                    <ul className="listHeader">
                        <RequiredNutrientsHeader/>
                    </ul>
                   <RequiredNutrientList/>

                    <h3 >Available fertilizers</h3>
                    <ul className="listHeader">

                    </ul>

                </div>
                <div className="col-12 col-lg-4 col-xl-4 col-xxl-4">
                    <h3 >Nutrients list</h3>
                    <ul className="listHeader">
                        <NutrientsListHeader/>
                    </ul>
                  <NutrientList/>
                    <h3 >Fertilizers list</h3>
                    <ul className="listHeader">
                        <FertilizersListHeader/>
                    </ul>
                    <AvailableFertilizersList/>
                </div>

            </div>
    )
}
export default FarmersRows