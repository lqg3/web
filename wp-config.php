<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'stevendotexe.github.io_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'lpS)kO=r`oJv}FmEmdW0<PO$fb6CJ#*)[(q9N<|RpP=;Qrj|O]U/MH!/Y(-sIn-{' );
define( 'SECURE_AUTH_KEY',  '0{5S)p_rH8?_X,I8vc<=]l`VDBiJ;Ij8MW4QzESsW9N~<e(m$A}i3I{xBR0x:idu' );
define( 'LOGGED_IN_KEY',    'u{*3o732?!|pH?6.-{BaNl:<k@NCll%d 5~`2lJq^&ygp4qp0Rit7X>wWSO W$,+' );
define( 'NONCE_KEY',        '89i1FGZu,#lduG@AOUd3m9Ik:)DQVCR=oBz0.L3:aitZhx1+U6EcY@ans@)zIImU' );
define( 'AUTH_SALT',        '4B*q2+[(ubL0Te^Wl3$lUoAJ.c!G[PJM_^j3>LGZ[+KYhFUZ+~^0zCYWA~TDCfZd' );
define( 'SECURE_AUTH_SALT', '!LlR{#2Y^a+B^RTrB n%.n^dcd}>Pw=38xxnaZ?+~wrRny1+L3l`vyn<g?Ai C+{' );
define( 'LOGGED_IN_SALT',   '/Rmg)i9G--R#)Nq[XJ&r-1&!d@^}xN|v!FLM )h)eq,<E357OM#oQf7f0RVlH|b-' );
define( 'NONCE_SALT',       'd}m0g#7NJC|9Fh4@aCtFHi3@]oN8ZPYa2/*1jn@XigY67=32a#&Kt[iS!Kb??5sg' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
