import React,{useCallback,useReducer}from 'react'
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator';
import Button from '../../shared/components/FormElements/Button'
import './NewWarehouse.css'

const formReducer = (state,action) =>{
    switch(action.type){
        case 'INPUT_CHANGE':
            let formIsValid =true;
            for(const inputId in state.inputs){
                if(inputId===action.inputId){
                    formIsValid=formIsValid && action.isValid;
                } else{
                    formIsValid=formIsValid && state.inputs[inputId].isValid;
                }
            }
        return {
            ...state,
            inputs:{
                ...state.inputs,
                [action.inputId]:{ value: action.value,isValid:action.isValid},
                
            },
            isValid:formIsValid
            };
        default:
            return state;
    }
};

const NewWarehouse = () =>{
  const[formState,dispatch]=  useReducer(formReducer,{
        inputs: {
            productname:
            {
                value:'',
                isValid:false
            },
            description:{
                value:'',
                isValid:false
            }
        },
        isValid:false
    });

    const inputHandler = useCallback((id,value,isValid) =>{
        dispatch({type:'INPUT_CHANGE',value:value,isValid: isValid,inputId:id})
    },[]);

    const productSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs)
    }

    return (<form className='product-form' onSubmit={productSubmitHandler}>
        <Input id ="productname" element ="input" type="text" label="ProductName" validators ={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid Product Name" onInput={inputHandler}/>
        <Input id ="description"element ="input" type="text" label="Description" validators ={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter a valid Description" onInput={inputHandler}/>
        <Input id ="price"element ="input" type="number" label="Price" validators ={[VALIDATOR_REQUIRE()]} errorText="Please enter a Price " onInput={inputHandler}/>
        <Input id ="inventory"element ="input" type="number" label="Inventory" validators ={[VALIDATOR_REQUIRE()]} errorText="Please enter Inventory" onInput={inputHandler}/>
    <Button type ="submit" disabled={!formState.isValid}>
        ADD PRODUCT
    </Button>
    </form>
    );

};
export default NewWarehouse;