import { StyleSheet } from "react-native";

// Możesz zdefiniować kolory tutaj lub zaimportować je z centralnego pliku,
// jeśli masz taki (np. z loginFormScreenStyle.ts lub styles.ts)
const darkPurple = '#5F3DC4'; // Kolor tła głównego kontenera i tytułu w białym boxie

export const newsStyles = StyleSheet.create({
    newsCardImageContainer: {
        backgroundColor: darkPurple,
        borderRadius: 25, // Zgodnie z obrazkiem, dość zaokrąglone
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginHorizontal: 16, // Standardowy margines dla kart
        marginTop: 32,        // Odstęp od góry
        width: '90%',         // Szerokość karty
        alignSelf: 'center',  // Wycentrowanie karty, jeśli jest w kontenerze flex
    },
    newsCardImageHeader: {
        color: 'white',       // Kolor tekstu "WORLD IS MUCH BETTER..."
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,     // Odstęp pod nagłówkiem
        paddingLeft: 10,      // Lekki padding od lewej dla nagłówka
        textTransform: 'uppercase', // Wielkie litery
    },
    newsCardImageContentBox: {
        backgroundColor: 'white', // Białe tło dla "TITLE(PLACEHOLDER)"
        borderRadius: 20,     // Zaokrąglenie białego pola
        paddingVertical: 25,  // Wewnętrzny padding pionowy
        paddingHorizontal: 20,// Wewnętrzny padding poziomy
        justifyContent: 'center', // Wycentrowanie tekstu w pionie
        alignItems: 'center',   // Wycentrowanie tekstu w poziomie
        minHeight: 100,        // Minimalna wysokość, aby wyglądało dobrze nawet z krótkim tytułem
        marginBottom: 15,     // Odstęp pod białym polem, przed "READ MORE"
    },
    newsCardImageTitle: {
        color: darkPurple,    // Kolor tekstu tytułu, taki sam jak tło głównego kontenera
        fontSize: 18,
        fontWeight: '500',    // Trochę mniej niż bold
        textAlign: 'center',  // Tekst tytułu wyśrodkowany
    },
    newsCardImageReadMoreContainer: {
        flexDirection: 'row', // Ułożenie tekstu i ikonki w rzędzie
        alignItems: 'center',   // Wyrównanie elementów w pionie
        alignSelf: 'flex-end',// Przesunięcie "READ MORE" do prawej strony karty
    },
    newsCardImageReadMoreText: {
        color: 'white',       // Kolor tekstu "READ MORE"
        fontSize: 14,
        fontWeight: 'bold',
        textDecorationLine: 'underline', // Podkreślenie
        marginRight: 5,       // Mały odstęp między tekstem a ikonką
        textTransform: 'uppercase', // Wielkie litery
    },
    newsCardImageReadMoreIcon: {
        color: 'white',       // Kolor ikonki strzałki
    },
});
