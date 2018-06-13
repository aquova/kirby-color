# Program that randomizes Kirby and the Amazing Mirror for GBA
# Written by aquova, 2018
# http://github.com/aquova/KAM-Rando

from PyQt5 import QtWidgets
import os, random, sys, hashlib
from mainwindow import Ui_MainWindow

VERSION = '0.0.1'

# ROM locations of Kirby's palette
kirbyPaletteLocations = ["4BB12E"]

# Palettes need to be in the same order as in the GUI
kirbyPalettes = ["2104BF563F203C18571053084E082A043F543C383718", # Red
                 "2104DF07FF129F121F169F193911D10C5F05F9049104", # Orange
                 "2104FF077F07FF06DD061606B1054C059F047C043604", # Yellow
                 "2104F953F01BCF136D07880606068305FC055A051205", # Green
                 "21047F7F7F721F66BF55FC3C74206D0CA432272EC621", # Cherry
                 "2104F873EF63684FA13A2136C12D6121BF2A1C169805", # Emerald
                 "2104F57F927F0E7F8B7E067EA365E6408D7D2A71875C", # Ocean
                 "2104577F907A2D72EB69615D0151A1402B60294C2838", # Sapphire
                 "21041A7F977EF57D727D4F6CCD05AA383745B338302C", # Grape
                 "21049B4A3B36D82D7425111DCE148B10B41071082F04", # Chocolate
                 "2104FF7F9C7318639452EF3D6B2DE71C10428C312925", # Chalk
                 "2104FF7FFF7F9C731863734EEF3D6B2D5F35BB243718", # Snow
                 "21043146EF3DAD356B2D29250821C6189F0A1F067A05", # Carbon
                 "0000324A1146CE398C314A290821C6184A29E71CA514", # Mirror
                 "00005D635D63784E784EB235EC18E71C7D2D171DF11C", # Stone
                 "0000FF7FFA7FF57F347B6C7A8779E578357911791179", # Ice
                 "0000BD77607460744354435427282728DA48B5449138", # GBA Meta Knight
                 "5325FB417D733C679C5AFB41F841D3397A29F914B410", # KDL3 Pink
                 "494DF06D7C7739739672F06DF061CE4D6A64E564A450", # KDL3 Blue
                 "00003D3FBD14BD14D914D914B20CAD593D3F5B32B925", # Waddle Dee
                 "0000DE7B2A7664756475E16C405C2038D66AEF51083D", # Lololo
                 "0000DE7BDE451C2D1C2DB6186F0C2700F67A306E2861", # Lalala
                 "0000DE7BFF7F7B6FF75E524ACE394A297B6FF75E524A"] # Grayscale

# Creating a custom exception, how fancy
class HashError(Exception):
    pass

class KirbyApp(QtWidgets.QMainWindow, Ui_MainWindow):
    def __init__(self, parent=None):
        super(KirbyApp, self).__init__(parent)
        self.setupUi(self)
        self.findROMButton.clicked.connect(self.openFile)
        self.randomizeButton.clicked.connect(self.runRandomizer)
        self.title.setText(self.title.text() + VERSION)

    # Opens ROM selector window, clears the previous path text
    def openFile(self):
        self.romDisplay.clear()
        self.romFile = QtWidgets.QFileDialog.getOpenFileName(self, "Open file", os.path.dirname(__file__), "GBA ROMs (*.gba)")[0]
        if self.romFile:
            self.romDisplay.setText(self.romFile)

    def getKirbyColor(self):
        c = self.kirbyComboBox.currentIndex()
        if c == (len(kirbyPalettes) + 1):
            return random.randint(0, len(kirbyPalettes)-1)
        return (c - 1)

    def runRandomizer(self):
        try:
            rom = open(self.romFile, 'rb').read()
            testHash = hashlib.md5(rom).hexdigest()
            # Checks for the correct ROM
            if testHash != "df5efe075b35859529ebf82a4d824458":
                raise HashError("Invalid checksum")
            romList = list(rom)

            # Uses given input as seed, else randomly picks a new seed to use
            KAM_seed = self.seedValue.text()
            if KAM_seed == "":
                KAM_seed = random.randint(0, 999999999)
            random.seed(KAM_seed)

            if self.kirbyComboBox.currentIndex() != 0:
                new_color = self.getKirbyColor()
                row = kirbyPalettes[new_color]
                new_colors = []
                for i in range(0, len(row), 2):
                    new_colors.append(int(row[i:i+2],16))

                # Replaces old color palettes with the new
                for item in kirbyPaletteLocations:
                    color_address = int(item, 16)
                    for i in range(0, len(new_colors)):
                        romList[color_address + i] = new_colors[i]

            rom = bytes(romList)
            new_rom = open('.'.join(self.romFile.split(".")[:-1]) + "_" + str(KAM_seed) + ".gba", 'wb')
            new_rom.write(rom)
            new_rom.close()

            QtWidgets.QMessageBox.about(self, "Success", "Your copy of The Amazing Mirror has been randomized. Enjoy!")
        except AttributeError:
            QtWidgets.QMessageBox.about(self, "Error", "Error: Specify a ROM location")
        except FileNotFoundError:
            QtWidgets.QMessageBox.about(self, "Error", "Error: File not found")
        except HashError:
            QtWidgets.QMessageBox.about(self, "Error", "The given file is invalid. Please use a US GBA Kirby and the Amazing Mirror ROM.")
        except Exception as e:
            QtWidgets.QMessageBox.about(self, "Error", "Some mysterious error has occurred. Please contact the developers with information about what happened. {}".format(e))

def main():
    app = QtWidgets.QApplication(sys.argv)
    window = KirbyApp()
    window.show()
    app.exec_()

if __name__ == "__main__":
    main()
