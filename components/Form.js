import styles from "./form.module.scss";

import Axios from "axios";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput.js";

const Form = () => {
	const hookForm = useForm();

	const fetchApiData = async () => {
		const res = await Axios.get("https://us-street.api.smarty.com/street-address?auth-id=122538655383400332&agent=smartystreets%20(website%3Ademo%2Fsingle-address%40latest)&license=us-core-cloud&street=2276%20Rock%20Canyon%20Cir&street2=&city=Provo&state=UT&zipcode=84604&match=enhanced&candidates=5&geocode=true");
		console.log(res.data.slice(0, 10));
	};

	const onSubmit = (inputValues) => {
		console.log(inputValues);
		fetchApiData();
	};

	return(
		<form onSubmit={hookForm.handleSubmit(onSubmit)}>
			<FormInput
				label={"Address line 1:"}
				name={"address-one"}
				hookForm={hookForm}
			/>
			<FormInput
				label={"Address line 2:"}
				name={"address-two"}
				hookForm={hookForm}
			/>
			<FormInput
				label={"City:"}
				name={"city"}
				hookForm={hookForm}
			/>
			<FormInput
				label={"State:"}
				name={"state"}
				hookForm={hookForm}
			/>
			<FormInput
				label={"Zipcode:"}
				name={"zipcode"}
				hookForm={hookForm}
			/>
			<button className={styles.submitButton} type={"submit"}>Submit</button>
		</form>
	)
};

export default Form;