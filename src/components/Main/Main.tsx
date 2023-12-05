import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import FormLayout from '../FormLayout/FormLayout';
import styles from './Main.module.css';

const MainPage = () => {
  const cntrlForm = useSelector((state: RootState) => state.controlledForm);
  const unCntrlForm = useSelector((state: RootState) => state.uncontrolledForm);
  const countries = useSelector((state: RootState) => state.countries);
  console.log(cntrlForm, unCntrlForm, countries);
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {cntrlForm.map((item) => (
          <FormLayout
            formProps={{ disabled: true }}
            nameProps={{ value: item.name }}
            ageProps={{ value: String(item.age) }}
            emailProps={{ value: item.email }}
            passwordProps={{ value: item.password }}
            checkPswdProps={{ value: item.checkPswd }}
            countryProps={{ value: item.country }}
            genderProps={{ value: item.gender }}
            termsProps={{ value: String(item.terms) }}
            fileProps={{ value: item.image as string }}
          />
        ))}
      </section>
      <section>
        {unCntrlForm.map((item) => (
          <FormLayout
            formProps={{ disabled: true }}
            nameProps={{ value: item.name }}
            ageProps={{ value: String(item.age) }}
            emailProps={{ value: item.email }}
            passwordProps={{ value: item.password }}
            checkPswdProps={{ value: item.checkPswd }}
            countryProps={{ value: item.country }}
            genderProps={{ value: item.gender }}
            termsProps={{ value: String(item.terms) }}
            fileProps={{ value: item.image as string }}
          />
        ))}
      </section>
    </main>
  );
};

export default MainPage;
