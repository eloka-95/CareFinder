<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Models\careFacilities;

class CareFacilitiesSeeder extends Seeder
{

    /**
     * Run the database seeds.
     */
    public function run(Faker $faker): void
    {
        $careFacilities = [
            //! Abia section .......
            [
                'name' => 'Abia State University Teaching Hospital',
                'state' => 'Abia',
                'details' => 'The service center in Aba for health care training and general hospital services.',
                'location' => 'Umueze Road Abayi, Aba, Abia State Nigeria',
                'phone_number' => '234 826 00 000, 0806 500 000, 082233714',
                'email' => 'info@absuthng.org',
            ],
            [
                'name' => 'Ekeoma Memorial Hospital',
                'state' => 'Abia',
                'details' => 'The Aba based health service center for health care and general hospital services.',
                'location' => '15 Scotland Crescent, Aba, Abia State Nigeria',
                'phone_number' => '08063592871, 08037079432',
                'email' => '',
            ],
            [
                'name' => 'Princess Mary Specialist Hospital',
                'state' => 'Abia',
                'details' => 'Princess Mary Specialist Hospital (The PMSH) is an approved primate medical clinic that is committed to providing an efficient and cos-effective healthcare services which cut across diagnostics, obstetric, gynaecology, and others.',
                'location' => '45 New Umuahia Road, Umu Okahia, Aba,',
                'phone_number' => '0806 406 3393',
                'email' => '',
            ],
            [
                'name' => 'New Era Hospital',
                'state' => 'Abia',
                'details' => 'This health sevice center in Aba offers gynecological and general hospital services',
                'location'=> '213 Azikwe Street, Aba, Abia State Nigeria',
                'phone_number' => '08032626620',
                'email' => '',
            ],
            [
                'name' => 'Isaac Okwuonu Memorial Hospital',
                'state' => 'Abia',
                'details' => 'This health sevice center in Aba offers gynecological and general hospital services',
                'location'=>'127b Ikot Ekpene Road, Ogbor Hill Aba, Abia State Nigeria',
                'phone_number' => '08037083732',
                'email' => '',
            ],
            [
                'name' => 'Kalunta Memorial Neuro-psychiatric Hospital',
                'state' => 'Abia',
                'details' => 'Kalunta Memorial Neuro-psychiatric Hospital is an Aba-based neuro-psychiatric hospital center offering medical care to the mentally challenged within Aba',
                'location'=>'Along New Umuahia Road, Ogbor-Hill, Aba, Abia State, Nigeria',
                'phone_number' => '0816 967 7399',
                'email' => '',
            ],
            [
                'name' => 'Nazareth Hospital',
                'state' => 'Abia',
                'details' => 'Nazareth Hospital is a private established health care center for the treatment of patient.',
                'location'=>'57 Pound Road, Aba, Abia State Nigeria',
                'phone_number' => '0803 340 0950',
                'email' => '',
            ],
            [
                'name' => 'Impact Hospital and Maternity',
                'state' => 'Abia',
                'details' => 'Impact Hospital and Maternity is approved by NHIS to continuously render patients-centered medicare needs, and healthcare services with an emphasis on pregnancy care and childbirth to every members of the society.',
                'location'=>'Plot 59 B Ukaegbu Road, Ogbor Hill, Aba, Abia',
                'phone_number' => ' 0803 392 0609',
                'email' => '',
            ],
            [
                'name' => 'Oleka Hospital and Maternity',
                'state' => 'Abia',
                'details' => 'Oleka Hospital and Maternity is a healthcare organization with specialty in caring for women during pregnancy and at childbirth, also they offers paediatrics and general medical care for all the residents of that vicinity.',
                'location'=>'Dubic Junction, Eke Osisioma, Aba, Abia State ',
                'phone_number' => '  0803 879 8137',
                'email' => '',
            ],
            //! Adamawa section ..........
            [
                'name' => 'Gal Bose Hospital',
                'state' => 'Adamawa',
                'details' => 'This healthcare center provides medical and surgical services in Yola.',
                'location'=>'22 Atiku Abubakar Way, Yola, Adamawa State Nigeria',
                'phone_number' => '08036414648, 08027722219',
                'email' => '',
            ],
            [
                'name' => 'Specialist Hospital',
                'state' => 'Adamawa',
                'details' => 'Specialist Hospital is a healthcare service center in Yola for provision of medical services.',
                'location'=>'Hospital Road, Yola, Adamawa State Nigeria',
                'phone_number' => '08036239191',
                'email' => '',
            ],
            [
                'name' => 'Peace Hospital',
                'state' => 'Adamawa',
                'details' => 'Peace Hospital is a healthcare service center for medical services in Yola.',
                'location'=>' 2 Luggere Street, Yola, Adamawa State Nigeria',
                'phone_number' => '08023383837',
                'email' => '',
            ],
            // !Akwa ibom section ........
            [
                'name' => 'Ibom Multi-Specialty Hospital',
                'state' => 'Akwa Ibom',
                'details' => 'Ibom Multi-Specialty Hospital is a fully equipped state of the art hospital with specialists on accident & emergency services, surgical services, whole body check, pediatrics care and lots of other health care services.',
                'location'=>' Ekit Itam II, Itu L.G.A., Uyo Ikot Ekpene Road, Uyo, Akwa Ibom State',
                'phone_number' => '0802 500 1790, 0701 010 0661',
                'email' => 'ibomspecialisthospitaluyo@gmail.com',
            ],
            [
                'name' => 'Faith Medical Centre',
                'state' => 'Akwa Ibom',
                'details' => 'Faith Medical Centre is a health care and diagnostic center approved by national health insurance scheme & offers comprehensive medical services for patients.',
                'location'=>' No 12 Nsit Street, Uyo, Akwa Ibom Nigeria',
                'phone_number' => '0802 374 6494',
                'email' => '',
            ],
            [
                'name' => 'Nedeke Paediatrics Hospital',
                'state' => 'Akwa Ibom',
                'details' => 'Nedeke Paediatrics Hospital is a childrens hospital in Uyo offering quality pediatric services and is equipped with modern facilities for effective medical diagnosis and treatments.',
                'location'=>' 34 Udo Ekpo Street off Nwaniba Road, Uyo, Akwaibom State Nigeria',
                'phone_number' => '0802 324 4902',
                'email' => '',
            ],
            [
                'name' => 'Domingo Specialist Hospital',
                'state' => 'Akwa Ibom',
                'details' => 'Domingo Specialist Hospital offers medical services on urology, surgery, pediatric, ultra sound, obstetrics, gynecology and laboratory services.',
                'location'=>' Plot 9 Unit E Ewet Housing Estate, Uyo, Akwa Ibom Nigeria',
                'phone_number' => '0803 405 7550',
                'email' => '',
            ],
            [
                'name' => 'Mediques plus by Meadowhall',
                'state' => 'Akwa Ibom',
                'details' => 'A private hospital in Uyo that offers comprehensive healthcare. We offer services that are professional, committed, personalized, affordable and detailed.',
                'location'=>' 10b, Ewet Housing estate extension, off four lane, Uyo, Akwaibom',
                'phone_number' => '0813 375 6264',
                'email' => '',
            ],
            [
                'name' => 'Dammy Memorial Hospital',
                'state' => 'Akwa Ibom',
                'details' => 'Dammy Memorial Hospital is a full service medical facility that provides a full range of medical, family support and diagnostic services.',
                'location'=>' No 34 Ukana Offot Street, Uyo, Akwa Ibom Nigeria',
                'phone_number' => '0803 783 8336',
                'email' => '',
            ],
            [
                'name' => 'University of Uyo Teaching Hospital',
                'state' => 'Akwa Ibom',
                'details' => 'University of Uyo Teaching Hospital provides medical services on paediatrics, dietetic, radiology, mental health, orthopaedics, anaesthesia, pharmacy, physiotherapy, surgery, ophthalmology, accident care and medical training.',
                'location'=>' Abak Road, before Ekom Iman junction, Uyo, Akwa-Ibom Nigeria',
                'phone_number' => '0803 308 6930, 0803 723 9503, 0806 011 1771',
                'email' => '',
            ],
            [
                'name' => 'Alma Clinics',
                'state' => 'Akwa Ibom',
                'details' => 'Alma Clinics is one of the major healthcare solution provider located in Uyo with qualified medical and paramedical staff handling general surgical health issues, emergency services, gynaecological healthcare are and lots more.',
                'location'=>' No 19 Ikot Udoro Street, 149 off Iko Ekpene Road, By NYSC Secretariat Road, Uyo, Akwa Ibom Nigeria',
                'phone_number' => '0802 352 6801, 0706 511 3966',
                'email' => '',
            ],
            [
                'name' => 'CareBridge Dialysis',

                'state' => 'Akwa Ibom',

                'details' => 'CareBridge Dialysis provides diagnostic, therapeutic and preventive services in a luxurious environment using state-of-the-art dialysis equipment, to provide optimal care to patients with renal disease.',

                'location'=>' St. Luke�s Hospital Nwaniba Road, Anua-Uyo, Akwa Ibom State, Nigeria',

                'phone_number' => '0907 093 5090',

                'email' => '',
            ],

            [
                'name' => 'Dyme Hospital and Maternity',

                'state' => 'Akwa Ibom',

                'details' => 'Dyme Hospital And Maternity is an approved private healthcare that offers medical services on obstetrics and gynaecology, ECG, scanning as well as pre-natal counselling.',

                'location'=>' No 10 Edem Urua Street, Uyo, Akwa Ibom Nigeria',

                'phone_number' => '0803 471 3240, 0808 482 5516',

                'email' => '',
            ],

            [
                'name' => 'Lifecare Clinics and Hospital',

                'state' => 'Akwa Ibom',

                'details' => 'Lifecare Clinics & Hospital is a NHIS accredited healthcare facility in Uyo that offers maternity healthcare services, HIV counselling, ultrasound scanning, surgery, X-ray, ECG and general practices.',

                'location'=>' No 8 Udosen Uko Street, Uyo, Akwa Ibom Nigeria',

                'phone_number' => '0803 431 0459, 0802 257 3101',

                'email' => '',
            ],

            [
                'name' => 'St Athanasius Hospital',

                'state' => 'Akwa Ibom',

                'details' => 'St Athanasius Hospital is a private hospital that is dully approved to provide medical services on surgery and general medical practice.',

                'location'=>' No 1 Ufeh Street, Federal Housing Estate Off clement Isong Street, Uyo, Akwa Ibom',

                'phone_number' => '0803 792 0924, 0802 314 7926, 0803 923 5370',

                'email' => '',
            ],
            [
                'name' => 'Ubong Abasi Specialist Hospital',

                'state' => 'Akwa Ibom',

                'details' => 'Ubong Abasi Specialist Hospital consist of dedicated nurses and medical staff who provides services in medical test and diagnosis, treatment and more.',

                'location'=>' 5, Clement Isong Street, FHA, Abak Road, Uyo, Akwa Ibom Nigeria',

                'phone_number' => '0803 541 2860, 0802 392 8123',

                'email' => '',
            ],
                //! Anambra section ...................................................
            [
                'name' => 'New Hope Hospital and Laboratory Limited',

                'state' => 'Anambra',

                'details' => 'New Hope Hospital and Laboratory Limited is a healthcare facility and maternity service center in Onitsha for gynecological and surgical services.',

                'location'=>' Plot 80 Modebe Avenue, City Centre, Odoakpu, Onitsha, Anambra',

                'phone_number' => '0803 304 5697, 0816 566 0321, 0805 314 9595',

                'email' => 'https://www.newhopehospital.org',
            ],

            [
                'name' => 'Holy Rosary Specialist Hospital and Maternity',

                'state' => 'Anambra',

                'details' => 'Holy Rosary Specialist Hospital and Maternity offers medical services on obstetrics and gynecology.',

                'location'=>' Near Basilica of the Most Holy Trinity, Onitsha, Anambra Nigeria',

                'phone_number' => '08035083940, 08068444352, 08033964026',

                'email' => '',
            ],

            [
                'name' => 'Toronto Hospital Nigeria Ltd',

                'state' => 'Anambra',

                'details' => 'One of the foremost hospitals in Onitsha. Providing general surgery, laser clinic, obgyn for women and children, internal medicine, dental care, X-Ray and ultrasound imaging centre.',

                'location' =>'  2 Upper Niger Bridge Road, Onitsha, Anambra Nigeria',

                'phone_number' => ' 0803 302 9717',

                'email' => 'http://www.torontohospitalng.com',
            ],

            [
                'name' => 'Divine Mercy Hospital and Maternity',

                'state' => 'Anambra',

                'details' => 'Divine Mercy Hospital and Maternity is a healthcare clinic that provides patient-focused services which include antenatal/post natal-services, childbirth, women health, pediatrics care, laboratory and lots ore.',

                'location'=>'  No 78c Ezeiweka Road, Awada Layout, Onitsha, Anambra

                ',

                'phone_number' => '  0706 762 2580
                ',

                'email' => '',
            ],

            [
                'name' => 'Rockville Hospitals Ltd
                ',

                'state' => 'Anambra',

                'details' => 'Rockville Hospitals Ltd is an adult and pediatric medical clinic and emergencies, laboratory, ECG, ultrasound services and many more.',

                'location'=>'   24B Court Road, Onitsha, Anambra

                ',

                'phone_number' => '  0818 399 2523
                ',

                'email' => '',
            ],

            [
                'name' => 'St. Lukes Hospital
                ',

                'state' => 'Anambra',

                'details' => 'St. Lukes Hospital is a modernized hospital located in the city of Onitsha and provides general medi-care services, diagnostics, emergency care and much more.',

                'location'=>'  No 7 Onwudiwe Street Onitsha
                ',

                'phone_number' => ' 
                ',

                'email' => '',
            ],

            [
                'name' => 'Kanayo Specialist Hospital and Maternity

                ',

                'state' => 'Anambra',

                'details' => 'Kanayo Specialist Hospital and Maternity is a multi specialist clinic that offers diagnostic, surgery, obstetrics and maternity care services among others.',

                'location'=>'  No 17 Enugu Road, Onitsha, Anambra Nigeria

                ',

                'phone_number' => '  07098749019
                ',

                'email' => '',
            ],
        ];

        foreach ($careFacilities as $facility) {
            careFacilities::factory()->create($facility);
        }

    }
}
