import styles from "./formInput.module.scss";

const FormInput = ({label, name, hookForm}) => {

	return(
		<div className={styles.formInputWrapper}>
			<div className={styles.formInputLabel}>{label}</div>
			<input className={styles.formInputInput}{...hookForm.register(name)}/>
		</div>
	)
};

export default FormInput;