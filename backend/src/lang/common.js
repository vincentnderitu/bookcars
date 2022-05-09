import LocalizedStrings from 'react-localization';
import Env from '../config/env.config';
import UserService from '../services/UserService';

export const strings = new LocalizedStrings({
    fr: {
        GENERIC_ERROR: "Une erreur non gérée s'est produite.",
        CHANGE_LANGUAGE_ERROR: "Une erreur s'est produite lors du changement de langue.",
        UPDATED: 'Modifications effectuées avec succès.',
        GO_TO_HOME: "Aller à la page d'accueil",
        FULL_NAME: 'Nom complet',
        EMAIL: 'E-mail',
        PASSWORD: 'Mot de passe',
        INVALID_EMAIL: 'Adresse e-mail invalide',
        CONFIRM_PASSWORD: 'Confirmer le mot de passe',
        PHONE: 'Téléphone',
        LOCATION: 'Localisation',
        BIO: 'Bio',
        IMAGE_REQUIRED: "L'image est obligatoire.",
        LOADING: 'Chargement...',
        PLEASE_WAIT: 'Veuillez patienter...',
        SEARCH_PLACEHOLDER: 'Rechercher...',
        CONFIRM_TITLE: 'Confirmation',
        ERROR_IN_PASSWORD: 'Le mot de passe doit contenir au moins 6 caractères.',
        PASSWORDS_DONT_MATCH: "Les mots de passe ne correspondent pas.",
        CREATE: 'Créer',
        UPDATE: 'Modifier',
        DELETE: 'Supprimer',
        SAVE: 'Sauvegarder',
        CANCEL: 'Annuler',
        RESET_PASSWORD: 'Changer le mot de passe',
        CURRENCY: ' DH',
        DELETE_AVATAR_CONFIRM: 'Êtes-vous sûr de vouloir supprimer la photo ?',
        DELETE_IMAGE: "Supprimer l'image",
        UPLOAD_IMAGE: "Charger une image",
        UNCHECK_ALL: 'Décocher tout',
        CHECK_ALL: 'Cocher tout',
    },
    en: {
        GENERIC_ERROR: 'An unhandled error occurred.',
        CHANGE_LANGUAGE_ERROR: 'An error occurred while changing language.',
        UPDATED: 'Changes made successfully.',
        GO_TO_HOME: 'Go to the home page',
        FULL_NAME: 'Full name',
        EMAIL: 'Email',
        PASSWORD: 'Password',
        INVALID_EMAIL: 'Invalid email address',
        CONFIRM_PASSWORD: 'Confirm Password',
        PHONE: 'Phone',
        LOCATION: 'Location',
        BIO: 'Bio',
        IMAGE_REQUIRED: 'The picture is required.',
        LOADING: 'Loading...',
        PLEASE_WAIT: 'Please wait...',
        SEARCH_PLACEHOLDER: 'Search...',
        CONFIRM_TITLE: 'Confirmation',
        ERROR_IN_PASSWORD: 'Password must be at least 6 characters long.',
        PASSWORDS_DONT_MATCH: "Passwords don't match.",
        CREATE: 'Create',
        UPDATE: 'Edit',
        DELETE: 'Delete',
        SAVE: 'Save',
        CANCEL: 'Cancel',
        RESET_PASSWORD: 'Change Password',
        CURRENCY: ' DH',
        DELETE_AVATAR_CONFIRM: 'Are you sure you want to delete the picture?',
        UPLOAD_IMAGE: 'Upload image',
        DELETE_IMAGE: 'Delete image',
        UNCHECK_ALL: 'Uncheck all',
        CHECK_ALL: 'Check all',
    }
});

let language = UserService.getQueryLanguage();

if (language === '' || !Env.LANGUAGES.includes(language)) {
    language = UserService.getLanguage();
}

strings.setLanguage(language);